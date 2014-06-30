require 'em-websocket'

guys = []

EM.run {
  EM::WebSocket.run(:host => "0.0.0.0", :port => 5555) do |ws|
    ws.onopen { |handshake|
      ws.send "Hello Client, you connected to #{handshake.path}"
      guys.each do |guy|
        guy.send 'A friend appeared!'
      end
      guys << ws
    }

    ws.onclose { puts "Connection closed"; guys.remove(ws) }

    ws.onmessage { |msg|
      puts "Recieved message: #{msg}"
      ws.send "Pong: #{msg}"
    }

    #loop do
      #sleep 2
      #guys.each do |guy|
        #guy.send "BUMP"
      #end
    #end
  end
}
