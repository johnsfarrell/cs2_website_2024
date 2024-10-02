#!/bin/bash

LOCAL_DIR=/Users/johnfarrell/Other/cs0020
SSH_DIR=jsfarrel@ssh.cs.brown.edu:/course/cs0020/website

sync() {
    local file_name=$1
    rsync -a ${DIR}/${file_name} ${SSH_DIR}
}

sync-assignment() {
    local lab_name=$1
    rsync -a ${LOCAL_DIR}/index.html \
             ${LOCAL_DIR}/labs/${lab_name}.html \
             ${LOCAL_DIR}/projects/${project_name}.html \
             ${SSH_DIR}/labs
}

sync-lecture() {
    local lecture_name=$1
    rsync -a ${LOCAL_DIR}/lectures.html \
             ${LOCAL_DIR}/files/lectures/lecture${lecture_name}.pptx \
             ${SSH_DIR}
}

case "$1" in
  sync)
    sync "$2"
    ;;
  sync-assignment)
    sync-assignment "$2"
    ;;
  sync-lecture)
    sync-lecture "$2"
    ;;
  *)
    echo "Usage: $0 {sync|sync-assignment|sync-lecture} [filename|assignment_num|lecture_num]"
    exit 1
    ;;
esac
