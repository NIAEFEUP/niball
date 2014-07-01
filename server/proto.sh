################################################################################
# USAGE:
#
# ./proto.sh
#   Compiles the protocol buffers. Don't forget to add/remove requires from
#   ./proto/proto.rb, that's the only file that's included.
#
################################################################################

OUT_DIR=./proto/
INP_DIR=./protobuffer/
IN_FILE=./protobuffer/niball_message.proto
NAMESPC="Proto"

BEEFCAKE_NAMESPACE=$NAMESPC protoc --beefcake_out $OUT_DIR -I $INP_DIR $IN_FILE
