# smile-tool

Wraps com.fasterxml.jackson.dataformat.smile.Tool

## Installation

    npm install -g smile-tool

You must hava Java installed and on your PATH for smile-tool to work.

## Usage
    smile-tool -e/-d [file]
     (if no file given, reads from stdin -- always writes to stdout)
     -d: decode Smile encoded input as JSON
     -e: encode JSON (text) input as Smile
     -v: encode JSON (text) input as Smile; read back, verify, do not write out
