require "aws-sdk-s3"

Aws.config.update({
    region: 'eu-north-1',
    credentials: Aws::Credentials.new('AKIAQI53VU4BHOVR2TEW', '0kjv7YoUCOzuFUHiX141bPPzekfqOAcfzp4S/8jC')
})