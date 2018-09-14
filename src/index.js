// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let H=0, Q=0, D=0, N=0, P=0, a=[], sol={}
if(currency==0){
  return {}
}
if(currency>=10000){
  return {error: "You are rich, my friend! We don't have so much coins for exchange"}
}
while(currency>=50){
  currency=currency-50
  H=H+1
}
if(H!=0) sol["H"]=H
while(currency>=25){
  currency=currency-25
  Q=Q+1
}
if(Q!=0) sol["Q"]=Q
while(currency>=10){
  currency=currency-10
  D=D+1
}
if(D!=0) sol["D"]=D
while(currency>=5){
  currency=currency-5
  N=N+1
}
if(N!=0) sol["N"]=N
while(currency>=1){
  currency=currency-1
  P=P+1
}
if(P!=0) sol["P"]=P
return sol
}
