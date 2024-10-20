import os
import subprocess

# Define the path to your directory
directory = 'src/app/_data'

try:
    # Change the current working directory
    os.chdir(directory)

    # Run the command to start the JSON server
    subprocess.run(['json-server', '--watch', 'semester.json'], check=True)

except FileNotFoundError:
    pass  # Ignore if the directory does not exist
except subprocess.CalledProcessError:
    pass  # Ignore if the command fails
except Exception:
    pass  # Ignore any unexpected errors
