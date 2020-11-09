# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
ServerUser.destroy_all
Channel.destroy_all
Message.destroy_all

demo = User.create!({ email: 'demo@gmail.com', username: 'Demo', password: '123456' })
andrew = User.create!({ email: 'achen414@gmail.com', username: 'Andrew', password: '123456'})
carlos = User.create!({ email: 'carlos@aa.com', username: 'Carlos', password: '123456'})
scooby = User.create!({ email: 'scooby@gmail.com', username: 'ScoobyJrue', password: '123456'})
shaky = User.create!({ email: 'shaky@gmail.com', username: 'ShakyWarrior', password: '123456'})

demo_server = Server.create!({ name: "demo's server", owner_id: demo.id, invite_code: TVCV0F4P })
andrew_server = Server.create!({ name: "Andrew's server", owner_id: andrew.id, invite_code: 6UBITP })

demo_server_demo = ServerUser.create!({ user_id: demo.id, server_id: demo_server.id })
demo_server_andrew = ServerUser.create!({ user_id: andrew.id, server_id: demo_server.id })
demo_server_carlos = ServerUser.create!({ user_id: carlos.id, server_id: demo_server.id })
demo_server_scooby = ServerUser.create!({ user_id: scooby.id, server_id: demo_server.id })
demo_server_shaky = ServerUser.create!({ user_id: shaky.id, server_id: demo_server.id })
andrew_server_demo = ServerUser.create!({ user_id: demo.id, server_id: andrew_server.id })
andrew_server_andrew = ServerUser.create!({ user_id: andrew.id, server_id: andrew_server.id })

demo_server_general = Channel.create!({ name: 'general', server_id: demo_server.id })
andrew_server_general = Channel.create!({ name: 'general', server_id: andrew_server.id })
andrew_server_aa = Channel.create!({ name: 'App Academy', server_id: andrew_server.id })

demo_message1 = Message.create!({ body: 'Andrew duo tonight', author_id: scooby.id, channel_id: demo_server_general.id })
demo_message2 = Message.create!({ body: 'sorry, i have to do my FS project', author_id: andrew.id, channel_id: demo_server_general.id })
demo_message3 = Message.create!({ body: 'booo', author_id: scooby.id, channel_id: demo_server_general.id })
aa_message1 = Message.create!({ body: 'Carlos, can I get some help on this FS project', author_id: andrew.id, channel_id: andrew_server_aa.id })
aa_message1 = Message.create!({ body: 'No! Figure it out yourself you dumb dumb', author_id: carlos.id, channel_id: andrew_server_aa.id })
aa_message1 = Message.create!({ body: 'Daaamn, ok.. someone is getting a bad performance report', author_id: andrew.id, channel_id: andrew_server_aa.id })
andrew_message1 = Message.create!({ body: 'TEST12123!@#$%^^&&*((', author_id: demo.id, channel_id: andrew_server_general.id })