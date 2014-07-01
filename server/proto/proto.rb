require 'beefcake'

# Require all files; if you don't want to automatically require all files in
# this directory comment this part and require them manually.
Dir[File.expand_path('../*.rb', __FILE__)].reject { |f| f == __FILE__ }.each do
  |file|
  require file
end
