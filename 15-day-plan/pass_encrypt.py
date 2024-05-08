from cryptography.fernet import Fernet

def generate_key():
    """Generate a key for encryption and decryption."""
    return Fernet.generate_key()

def write_key(key, key_file):
    """Write the key to a file for later use."""
    with open(key_file, 'wb') as key_file:
        key_file.write(key)

def load_key(key_file):
    """Load the key from the file."""
    return open(key_file, 'rb').read()

def encrypt_file(file_path, key):
    """Encrypt a file and write the encrypted content to a new file."""
    cipher = Fernet(key)
    with open(file_path, 'rb') as file:
        data = file.read()
    encrypted_data = cipher.encrypt(data)
    with open(file_path + '.encrypted', 'wb') as file:
        file.write(encrypted_data)

def decrypt_file(encrypted_file_path, key):
    """Decrypt an encrypted file and write the decrypted content to a new file."""
    cipher = Fernet(key)
    with open(encrypted_file_path, 'rb') as file:
        encrypted_data = file.read()
    decrypted_data = cipher.decrypt(encrypted_data)
    with open(encrypted_file_path.rstrip('.encrypted') + '_decrypted.txt', 'wb') as file:
        file.write(decrypted_data)

# Example usage
#key = generate_key()
#write_key(key, 'secret.key')

# Load the key.
key = load_key('secret.key')

# Encrypt a text file
if __name__ == "__main__":
    # encrypt_file('./Pass.txt', key)
    # Decrypt the encrypted file
    decrypt_file('./Pass.txt.encrypted', key)
