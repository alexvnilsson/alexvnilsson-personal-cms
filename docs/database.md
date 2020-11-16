# Database -- connections and usage

## WSL/Windows connection

If your MongoDB-server is installed on Windows (host system) instead of in WSL, follow these steps:

1. Bind server address to `0.0.0.0` or your specific local LAN-address (by editing `mongod.cfg` under the installation directory of the server, such as `Program Files/MongoDB/Server/x.x/bin`).
2. Allow inbound traffic to the server port (default: `27017`) in Windows Defender Firewall.
