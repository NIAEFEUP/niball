## Generated from niball_message.proto for 
require "beefcake"

module Proto

  class NiballMessage
    include Beefcake::Message

    module MType
      GAME_SYNC = 1
      ROOM_REQ = 2
      ROOM_RESP = 3
    end
  end

  class NiballMessage
    required :m_type, NiballMessage::MType, 1
    optional :game_sync, GameSync, 2
  end
end
