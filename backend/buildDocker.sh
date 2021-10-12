#!/bin/sh
TAG=$(git log -1 --format=%h)
sudo docker build . -t personal-site-strapi-image:${TAG} --rm