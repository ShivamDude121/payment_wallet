# payment_wallet

##backend routes

post
http://localhost:3000/user/signup
body{
    firstname:z.string().min(3).max(15),
    lastname:z.string().min(3).max(15),
    number:z.string().length(10),
    username:z.string().min(3).max(15),
    password:z.string().min(3).max(15),
}

zod check--->db chech if exists---->creates user---->crestes balance account--->returns jwt of user id


post
http://localhost:3000/user/login

body{
      username:z.string().min(3).max(15),
    password:z.string().min(3).max(15)
}

zod check---->find user--->output jwt 


get
http://localhost:3000/account/balance
header=req.headers.authorization>>jwt--->finduser --->returns there balance


post
http://localhost:3000/account/transfer
body
{
   "userId" :string,
   "amount":number
}
header=req.headers.authorization>>jwt
jwtvarify--->find user by user id---->tranfer fund--->rersult


post
http://localhost:3000/user/find
baody{
    "name":string

}
returns--->{}--->ans:-->[]of data
returns array of data