FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    git \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Set working directory for the app
WORKDIR /var/www/html/backend

# Copy the Nginx configuration file (default.conf)
COPY ./default.conf /etc/nginx/sites-available/default

# Expose port 80 for Nginx
EXPOSE 80

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy existing Laravel project files
COPY . /var/www/html/backend

# Set appropriate permissions on Laravel directories
RUN chown -R www-data:www-data /var/www/html/backend/laravel && \
    chmod -R 775 /var/www/html/backend/laravel && \
    chmod -R 775 /var/www/html/backend/laravel/storage && \
    chmod -R 775 /var/www/html/backend/laravel/bootstrap/cache

# Install Composer dependencies (if there is a composer.json already)
RUN cd /var/www/html/backend/laravel && composer install

# Start PHP-FPM and Nginx
CMD service nginx start && php-fpm
