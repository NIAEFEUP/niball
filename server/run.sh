#!/bin/bash

################################################################################
# USAGE:
#
# ./run.sh
#   Launches the server in daemon mode, with multithreading. Kill any running
#   server instances before launching new one.
#
# ./run.sh stop || ./run.sh STOP
#   Just kill any runing server instance.
#
################################################################################

kill -9 $(cat tmp/pids/thin.pid) &> /dev/null
if [[ $# -eq 0 || ! $1 =~ stop|STOP ]]; then
  thin start -R config.ru -d --threaded
fi
