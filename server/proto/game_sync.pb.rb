## Generated from game_sync.proto for 
require "beefcake"

module Proto

  class GameSync
    include Beefcake::Message
  end

  class GameSync
    required :ball, Ball, 1
    repeated :players, Player, 2
    required :team_1_score, :uint32, 3
    required :team_2_score, :uint32, 4
    required :time, :uint32, 5
  end
end
