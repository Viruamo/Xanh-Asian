#!/usr/bin/env python3
import http.server
import socketserver
import os
import socket
import sys
import time
import threading
from pathlib import Path
from datetime import datetime

PORT = 3000
DIRECTORY = Path(__file__).parent

# Theo dõi thời gian sửa đổi của các file
file_mtimes = {}
last_change_time = 0

# Get local IP
def get_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # API endpoint để kiểm tra file thay đổi
        path_only = self.path.split('?')[0]
        
        if path_only == '/api/check-changes':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            super().end_headers()
            response = f'{{"lastChange": {last_change_time}}}'
            self.wfile.write(response.encode())
            return
        
        # Redirect / to index.html
        if self.path == '/':
            self.path = '/index.html'
        
        # Serve from public folder for static assets
        if self.path.startswith('/images/') or self.path.startswith('/favicon'):
            self.path = '/public' + self.path
        
        return super().do_GET()
    
    def end_headers(self):
        # Cache busting for development - forces browser to reload
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ReusableUDPServer(socketserver.TCPServer):
    allow_reuse_address = True

def get_all_files():
    """Lấy tất cả các file HTML, CSS, JS"""
    extensions = {'.html', '.css', '.js', '.py'}
    files = []
    for ext in extensions:
        files.extend(DIRECTORY.rglob(f'*{ext}'))
    return [f for f in files if '.venv' not in str(f)]

def check_file_changes():
    """Kiểm tra xem có file nào thay đổi không"""
    global file_mtimes, last_change_time
    
    current_files = get_all_files()
    
    for file_path in current_files:
        try:
            mtime = file_path.stat().st_mtime
            file_str = str(file_path)
            
            if file_str not in file_mtimes:
                file_mtimes[file_str] = mtime
            elif file_mtimes[file_str] != mtime:
                file_mtimes[file_str] = mtime
                last_change_time = time.time()
                return file_path
        except:
            pass
    
    return None

os.chdir(DIRECTORY)
ip = get_ip()

print(f"\n✓ Server running with auto-reload!")
print(f"✓ Open: http://localhost:{PORT}")
print(f"✓ Or:   http://{ip}:{PORT}")
print(f"✓ Watching for file changes...\n")

# Khởi tạo file_mtimes
for f in get_all_files():
    try:
        file_mtimes[str(f)] = f.stat().st_mtime
    except:
        pass

# Tạo thread kiểm tra file changes
def watch_files():
    while True:
        time.sleep(0.5)
        changed_file = check_file_changes()
        if changed_file:
            print(f"\n⚠️  File thay đổi: {changed_file.name}")
            print("🔄 Nhấn Ctrl+C để dừng, sau đó chạy lại server\n")

watcher_thread = threading.Thread(target=watch_files, daemon=True)
watcher_thread.start()

with ReusableUDPServer(("", PORT), MyHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✓ Server đã dừng")
        sys.exit(0)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✓ Server stopped")
