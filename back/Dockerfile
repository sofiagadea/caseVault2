FROM ruby:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
        build-essential \
        libpq-dev \
        nodejs

COPY Gemfile Gemfile.lock ./

RUN gem install bundler && \
    bundle install --jobs 20 --retry 5

COPY . .

RUN rails db:migrate && \
    rails db:seed

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]