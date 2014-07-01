## Generated from ball.proto for 
require "beefcake"

module Proto

  class Ball
    include Beefcake::Message

    module BallState
      IN_GAME = 1
      TEAM_1_KICK = 2
      TEAM_2_KICK = 3
    end
  end

  class Ball
    required :position, Pair, 1
    required :velocity, Pair, 2
    required :acceleration, Pair, 3
    required :ball_state, Ball::BallState, 4
  end
end
