## Generated from player.proto for 
require "beefcake"

module Proto

  class Player
    include Beefcake::Message
  end

  class Player
    required :id, :string, 1
    required :position, Pair, 2
    required :velocity, Pair, 3
    required :acceleration, Pair, 4
  end
end
