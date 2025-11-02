#!/usr/bin/env python3
import sys
from pathlib import Path


def main() -> None:
    """Rename all files in a given folder sequentially using a provided base name."""
    if len(sys.argv) != 3:
        print("Usage: script.py <folder_path> <base_name>")
        sys.exit(1)

    folder_path = Path(sys.argv[1])
    base_name = sys.argv[2]

    if not folder_path.is_dir():
        print("Error: provided path is not a directory.")
        sys.exit(1)

    files = sorted([f for f in folder_path.iterdir() if f.is_file()])

    for i, file in enumerate(files, start=1):
        new_name = f"{base_name}{i}{file.suffix}"
        new_path = folder_path / new_name
        file.rename(new_path)


if __name__ == "__main__":
    main()
