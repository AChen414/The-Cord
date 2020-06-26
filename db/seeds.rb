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

demo = User.create!({ email: 'demo@gmail.com', username: 'Demo', password: '123456' })
andrew = User.create!({ email: 'achen414@gmail.com', username: 'Andrew', password: '123456'})

demo_server = Server.create!({ name: 'demo''s server', owner_id: demo.id })
andrew_server = Server.create!({ name: 'Andrew''s server', owner_id: andrew.id })

demo_server_demo = ServerUser.create!({ user_id: demo.id, server_id: demo_server.id })
demo_server_andrew = ServerUser.create!({ user_id: andrew.id, server_id: demo_server.id })
andrew_server_demo = ServerUser.create!({ user_id: demo.id, server_id: andrew_server.id })
andrew_server_andrew = ServerUser.create!({ user_id: andrew.id, server_id: andrew_server.id })