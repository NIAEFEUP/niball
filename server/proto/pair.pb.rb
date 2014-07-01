## Generated from pair.proto for 
require "beefcake"

module Proto

  class Pair
    include Beefcake::Message
  end

  class Pair
    required :x, :float, 1
    required :y, :float, 2
  end
end
