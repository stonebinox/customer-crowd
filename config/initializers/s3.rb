CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => "YOUR AMAZON ACCESS KEY",
      :aws_secret_access_key  => "AKIAI5IYY7ZOEO5MCS5A",
      :region                 => 'us-west-1' # Change this for different AWS region. Default is 'us-east-1'
  }
  config.fog_directory  = "customercrowd"
end