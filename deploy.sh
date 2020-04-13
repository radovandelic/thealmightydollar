#!/usr/bin/env bash
source .env

scp -i $PEMFILE -r build $USER@$IP:/home/$USER/