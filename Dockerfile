FROM ruby:3.2.2

ENV DISABLE_SPRING=true

RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    libpq-dev

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN gem install bundler:2.2.27
RUN bundle install

COPY . .

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]