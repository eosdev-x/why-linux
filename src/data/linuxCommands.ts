// Linux commands data organized by category
export interface Command {
  name: string;
  syntax: string;
  description: string;
  example: string;
  category: string;
}

export const commands: Command[] = [
  // File Management
  {
    name: 'ls',
    syntax: 'ls [options] [directory]',
    description: 'List directory contents',
    example: '# List all files including hidden ones in long format\nls -la\n# Output: total 32\n# drwxr-xr-x  5 user user 4096 Apr 17 10:30 .',
    category: 'file'
  },
  {
    name: 'cd',
    syntax: 'cd [directory]',
    description: 'Change the current directory',
    example: '# Change to home directory\ncd ~\n\n# Change to parent directory\ncd ..',
    category: 'file'
  },
  {
    name: 'pwd',
    syntax: 'pwd',
    description: 'Print working directory (current directory path)',
    example: '# Show current directory\npwd\n# Output: /home/user/documents',
    category: 'file'
  },
  {
    name: 'mkdir',
    syntax: 'mkdir [options] <directory>',
    description: 'Create new directories',
    example: '# Create nested directories\nmkdir -p projects/website/css\n# Creates projects, website, and css directories',
    category: 'file'
  },
  {
    name: 'rmdir',
    syntax: 'rmdir [options] <directory>',
    description: 'Remove empty directories',
    example: '# Remove empty directory\nrmdir old_files\n# Directory will only be removed if empty',
    category: 'file'
  },
  {
    name: 'rm',
    syntax: 'rm [options] <file/directory>',
    description: 'Remove files or directories',
    example: '# Remove directory and all contents recursively\nrm -rf old_project\n# WARNING: Use with caution - no confirmation or recovery',
    category: 'file'
  },
  {
    name: 'cp',
    syntax: 'cp [options] <source> <destination>',
    description: 'Copy files and directories',
    example: '# Copy directory and its contents recursively\ncp -r documents/ backup/\n# Creates or updates backup/documents/',
    category: 'file'
  },
  {
    name: 'mv',
    syntax: 'mv [options] <source> <destination>',
    description: 'Move or rename files and directories',
    example: '# Rename a file\nmv old_name.txt new_name.txt\n\n# Move file to another directory\nmv file.txt /path/to/directory/',
    category: 'file'
  },
  {
    name: 'touch',
    syntax: 'touch [options] <filename>',
    description: 'Create empty files or update file timestamps',
    example: '# Create multiple empty files\ntouch file1.txt file2.txt file3.txt\n# Creates files if they don\'t exist',
    category: 'file'
  },
  {
    name: 'cat',
    syntax: 'cat [options] <filename>',
    description: 'Concatenate and display file contents',
    example: '# Display file contents\ncat config.json\n# Outputs the entire file content',
    category: 'file'
  },
  {
    name: 'head',
    syntax: 'head [options] <filename>',
    description: 'Display the beginning of files',
    example: '# Display first 10 lines of a file\nhead log.txt\n\n# Display first 5 lines\nhead -n 5 log.txt',
    category: 'file'
  },
  {
    name: 'tail',
    syntax: 'tail [options] <filename>',
    description: 'Display the end of files',
    example: '# Display last 10 lines of a file\ntail log.txt\n\n# Follow file updates in real-time\ntail -f /var/log/syslog',
    category: 'file'
  },
  {
    name: 'find',
    syntax: 'find [path] [expression]',
    description: 'Search for files in a directory hierarchy',
    example: '# Find all .jpg files in current directory and subdirectories\nfind . -name "*.jpg"\n\n# Find files modified in the last day\nfind /home -mtime -1',
    category: 'file'
  },
  
  // Process Management
  {
    name: 'ps',
    syntax: 'ps [options]',
    description: 'Report process status',
    example: '# Display all running processes\nps aux\n# Shows detailed information about all processes',
    category: 'process'
  },
  {
    name: 'top',
    syntax: 'top [options]',
    description: 'Display and update sorted information about processes',
    example: '# Interactive process viewer\ntop\n# Press q to quit, k to kill a process',
    category: 'process'
  },
  {
    name: 'kill',
    syntax: 'kill [options] <pid>',
    description: 'Send a signal to a process',
    example: '# Terminate process with PID 1234\nkill 1234\n\n# Force kill a process\nkill -9 1234',
    category: 'process'
  },
  {
    name: 'killall',
    syntax: 'killall [options] <name>',
    description: 'Kill processes by name',
    example: '# Kill all firefox processes\nkillall firefox\n# Terminates all processes with the name "firefox"',
    category: 'process'
  },
  {
    name: 'bg',
    syntax: 'bg [job_spec]',
    description: 'Resume suspended jobs in the background',
    example: '# Resume the most recently suspended job in background\nbg\n# Job continues running in background',
    category: 'process'
  },
  {
    name: 'fg',
    syntax: 'fg [job_spec]',
    description: 'Bring jobs to foreground',
    example: '# Bring most recently backgrounded job to foreground\nfg\n# Job now runs in foreground',
    category: 'process'
  },
  {
    name: 'jobs',
    syntax: 'jobs [options]',
    description: 'List active jobs',
    example: '# List all jobs\njobs\n# Output: [1]+ Running    sleep 100 &',
    category: 'process'
  },
  {
    name: 'nice',
    syntax: 'nice [option] [command]',
    description: 'Run a command with modified scheduling priority',
    example: '# Run a command with lower priority\nnice -n 10 tar -czf backup.tar.gz /home/user\n# Lower number = higher priority',
    category: 'process'
  },
  
  // System Information
  {
    name: 'uname',
    syntax: 'uname [options]',
    description: 'Print system information',
    example: '# Print all system information\nuname -a\n# Output: Linux hostname 5.4.0-42-generic #46-Ubuntu SMP x86_64 GNU/Linux',
    category: 'system'
  },
  {
    name: 'df',
    syntax: 'df [options]',
    description: 'Report file system disk space usage',
    example: '# Show disk space in human-readable format\ndf -h\n# Output includes filesystem, size, used, available, use%, mount point',
    category: 'system'
  },
  {
    name: 'free',
    syntax: 'free [options]',
    description: 'Display amount of free and used memory in the system',
    example: '# Display memory information in human-readable format\nfree -h\n# Shows total, used, free, shared, buff/cache, available',
    category: 'system'
  },
  {
    name: 'uptime',
    syntax: 'uptime',
    description: 'Show how long the system has been running',
    example: '# Display system uptime\nuptime\n# Output: 14:30:05 up 3 days, 7:52, 5 users, load average: 0.14, 0.18, 0.23',
    category: 'system'
  },
  {
    name: 'date',
    syntax: 'date [options] [+format]',
    description: 'Display or set the system date and time',
    example: '# Display current date and time\ndate\n# Output: Thu Apr 17 14:31:23 PDT 2025\n\n# Custom format\ndate +"%Y-%m-%d %H:%M:%S"\n# Output: 2025-04-17 14:31:23',
    category: 'system'
  },
  {
    name: 'cal',
    syntax: 'cal [options] [month] [year]',
    description: 'Display a calendar',
    example: '# Display calendar for current month\ncal\n\n# Display calendar for entire year\ncal 2025',
    category: 'system'
  },
  {
    name: 'who',
    syntax: 'who [options]',
    description: 'Show who is logged on',
    example: '# List logged in users\nwho\n# Output: user1 tty1 2025-04-17 09:15 (:0)',
    category: 'system'
  },
  
  // Networking
  {
    name: 'ping',
    syntax: 'ping [options] <host>',
    description: 'Send ICMP ECHO_REQUEST to network hosts',
    example: '# Ping google.com 5 times\nping -c 5 google.com\n# Shows round-trip time and packet loss statistics',
    category: 'network'
  },
  {
    name: 'ifconfig',
    syntax: 'ifconfig [interface] [options]',
    description: 'Configure network interface parameters',
    example: '# Display all network interfaces\nifconfig\n# Shows IP addresses, MAC addresses, and other network information',
    category: 'network'
  },
  {
    name: 'ip',
    syntax: 'ip [options] <object> <command>',
    description: 'Show/manipulate routing, devices, policy routing and tunnels',
    example: '# Show IP addresses\nip addr show\n\n# Show routing table\nip route',
    category: 'network'
  },
  {
    name: 'netstat',
    syntax: 'netstat [options]',
    description: 'Print network connections, routing tables, interface statistics',
    example: '# Display all active connections\nnetstat -tuln\n# Shows listening TCP and UDP ports',
    category: 'network'
  },
  {
    name: 'ssh',
    syntax: 'ssh [options] [user@]hostname [command]',
    description: 'OpenSSH SSH client (remote login program)',
    example: '# Connect to remote server\nssh user@example.com\n\n# Run command on remote server\nssh user@example.com ls -la',
    category: 'network'
  },
  {
    name: 'scp',
    syntax: 'scp [options] [[user@]host1:]file1 ... [[user@]host2:]file2',
    description: 'Secure copy (remote file copy program)',
    example: '# Copy local file to remote server\nscp file.txt user@example.com:/path/to/destination/\n\n# Copy from remote to local\nscp user@example.com:/path/to/file.txt local_directory/',
    category: 'network'
  },
  {
    name: 'wget',
    syntax: 'wget [options] <url>',
    description: 'Non-interactive network downloader',
    example: '# Download a file\nwget https://example.com/file.zip\n# Downloads file to current directory',
    category: 'network'
  },
  {
    name: 'curl',
    syntax: 'curl [options] <url>',
    description: 'Transfer data from or to a server',
    example: '# Get webpage content\ncurl https://example.com\n\n# Download file and save with specific name\ncurl -o output.html https://example.com',
    category: 'network'
  },
  
  // Text Processing
  {
    name: 'grep',
    syntax: 'grep [options] <pattern> [file...]',
    description: 'Search for patterns in files',
    example: '# Search for "error" in log file\ngrep "error" logfile.txt\n\n# Recursive case-insensitive search\ngrep -ri "warning" /var/log/',
    category: 'text'
  },
  {
    name: 'sed',
    syntax: 'sed [options] <script> [file...]',
    description: 'Stream editor for filtering and transforming text',
    example: '# Replace all occurrences of "old" with "new" in a file\nsed \'s/old/new/g\' file.txt\n\n# Delete lines containing "pattern"\nsed \'/pattern/d\' file.txt',
    category: 'text'
  },
  {
    name: 'awk',
    syntax: 'awk [options] <script> [file...]',
    description: 'Pattern scanning and processing language',
    example: '# Print first column of each line\nawk \'{print $1}\' file.txt\n\n# Sum the values in first column\nawk \'{sum+=$1} END {print sum}\' numbers.txt',
    category: 'text'
  },
  {
    name: 'sort',
    syntax: 'sort [options] [file...]',
    description: 'Sort lines of text files',
    example: '# Sort file alphabetically\nsort file.txt\n\n# Sort numerically\nsort -n numbers.txt',
    category: 'text'
  },
  {
    name: 'uniq',
    syntax: 'uniq [options] [input [output]]',
    description: 'Report or omit repeated lines',
    example: '# Remove duplicate lines (must be sorted first)\nsort file.txt | uniq\n\n# Count occurrences of lines\nsort file.txt | uniq -c',
    category: 'text'
  },
  {
    name: 'wc',
    syntax: 'wc [options] [file...]',
    description: 'Print newline, word, and byte counts for files',
    example: '# Count lines, words, and characters\nwc file.txt\n# Output: 7 26 158 file.txt (lines, words, characters)',
    category: 'text'
  },
  {
    name: 'diff',
    syntax: 'diff [options] <file1> <file2>',
    description: 'Compare files line by line',
    example: '# Compare two files\ndiff file1.txt file2.txt\n# Shows lines that differ between files',
    category: 'text'
  },
  
  // Permissions
  {
    name: 'chmod',
    syntax: 'chmod [options] <mode> <file...>',
    description: 'Change file mode bits (permissions)',
    example: '# Make a script executable for owner\nchmod u+x script.sh\n\n# Set permissions using octal notation\nchmod 755 script.sh\n# (rwxr-xr-x)',
    category: 'permissions'
  },
  {
    name: 'chown',
    syntax: 'chown [options] <user>[:<group>] <file...>',
    description: 'Change file owner and group',
    example: '# Change owner of a file\nchown user1 file.txt\n\n# Change owner and group\nchown user1:group1 file.txt',
    category: 'permissions'
  },
  {
    name: 'chgrp',
    syntax: 'chgrp [options] <group> <file...>',
    description: 'Change group ownership',
    example: '# Change group of a file\nchgrp developers file.txt\n# Changes file\'s group to "developers"',
    category: 'permissions'
  },
  {
    name: 'umask',
    syntax: 'umask [options] [mode]',
    description: 'Set file mode creation mask',
    example: '# Display current umask\numask\n# Output: 0022\n\n# Set new umask\numask 027\n# New files will have permissions 750',
    category: 'permissions'
  },
  {
    name: 'sudo',
    syntax: 'sudo [options] <command>',
    description: 'Execute a command as another user (typically superuser)',
    example: '# Run command as root\nsudo apt update\n\n# Edit system file\nsudo nano /etc/fstab',
    category: 'permissions'
  },
  
  // Compression
  {
    name: 'tar',
    syntax: 'tar [options] [file...]',
    description: 'Tape archiver - create, extract, or list archive files',
    example: '# Create compressed archive\ntar -czvf archive.tar.gz directory/\n\n# Extract archive\ntar -xzvf archive.tar.gz',
    category: 'compression'
  },
  {
    name: 'gzip',
    syntax: 'gzip [options] <file...>',
    description: 'Compress or expand files',
    example: '# Compress a file\ngzip file.txt\n# Creates file.txt.gz and removes original\n\n# Decompress\ngzip -d file.txt.gz',
    category: 'compression'
  },
  {
    name: 'gunzip',
    syntax: 'gunzip [options] <file...>',
    description: 'Decompress files',
    example: '# Decompress a file\ngunzip file.txt.gz\n# Creates file.txt and removes compressed version',
    category: 'compression'
  },
  {
    name: 'zip',
    syntax: 'zip [options] <zipfile> <file...>',
    description: 'Package and compress files',
    example: '# Create zip archive\nzip -r archive.zip directory/\n# Creates archive.zip containing all files in directory/',
    category: 'compression'
  },
  {
    name: 'unzip',
    syntax: 'unzip [options] <zipfile> [file...]',
    description: 'List, test and extract compressed files in a ZIP archive',
    example: '# Extract zip archive\nunzip archive.zip\n\n# List contents without extracting\nunzip -l archive.zip',
    category: 'compression'
  },
  
  // Package Management
  {
    name: 'apt',
    syntax: 'apt [options] <command>',
    description: 'Advanced Package Tool (Debian/Ubuntu)',
    example: '# Update package lists\nsudo apt update\n\n# Install a package\nsudo apt install package-name\n\n# Remove a package\nsudo apt remove package-name',
    category: 'package'
  },
  {
    name: 'apt-get',
    syntax: 'apt-get [options] <command>',
    description: 'APT package handling utility (older version)',
    example: '# Update package lists\nsudo apt-get update\n\n# Upgrade installed packages\nsudo apt-get upgrade',
    category: 'package'
  },
  {
    name: 'dpkg',
    syntax: 'dpkg [options] <action> <package>',
    description: 'Debian package manager',
    example: '# Install a .deb package\nsudo dpkg -i package.deb\n\n# List all installed packages\ndpkg -l',
    category: 'package'
  },
  {
    name: 'yum',
    syntax: 'yum [options] <command> [package...]',
    description: 'Yellowdog Updater Modified (RHEL/CentOS/Fedora)',
    example: '# Install a package\nsudo yum install package-name\n\n# Update all packages\nsudo yum update',
    category: 'package'
  },
  {
    name: 'dnf',
    syntax: 'dnf [options] <command> [package...]',
    description: 'Dandified YUM (next-generation version of YUM)',
    example: '# Search for a package\ndnf search keyword\n\n# Install a package\nsudo dnf install package-name',
    category: 'package'
  },
  {
    name: 'pacman',
    syntax: 'pacman [options] <operation> [package...]',
    description: 'Package manager utility (Arch Linux)',
    example: '# Synchronize and update packages\nsudo pacman -Syu\n\n# Install a package\nsudo pacman -S package-name',
    category: 'package'
  }
];
