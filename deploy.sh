#!/usr/bin/env bash
source .env

# frontend
npm run build
scp -i $PEMFILE -r build $USER@$IP:/home/$USER/

# backend
scp -i $PEMFILE -r backend/src $USER@$IP:/home/$USER/backend