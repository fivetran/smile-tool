# smile-tool

    Usage: java com.fasterxml.jackson.dataformat.smile.Tool -e/-d [file]
     (if no file given, reads from stdin -- always writes to stdout)
     -d: decode Smile encoded input as JSON
     -e: encode JSON (text) input as Smile
     -v: encode JSON (text) input as Smile; read back, verify, do not write out

Wraps com.fasterxml.jackson.dataformat.smile.Tool