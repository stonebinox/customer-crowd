CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => "AKIAI6OERPJ2JDICKK3Q",
      :aws_secret_access_key  => "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",
      :region                 => 'us-west-1' # Change this for different AWS region. Default is 'us-east-1'
  }
  config.fog_directory  = "customercrowd"
end