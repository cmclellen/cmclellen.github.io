# Use the official Ruby image with version 3.3.5
FROM ruby:3.3.5

# Set working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && \
    apt-get -y install build-essential \
    git \
    apt-utils

# Install Jekyll and Bundler
RUN gem install jekyll:3.10.0 bundler:2.5.21
