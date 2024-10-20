import os
import subprocess

try:

    # Run the command to start the Angular application
    subprocess.run(['ng', 's'], check=True)

except FileNotFoundError:
    pass  # Ignore if the directory does not exist
except subprocess.CalledProcessError:
    pass  # Ignore if the command fails
except Exception:
    pass  # Ignore any unexpected errors
