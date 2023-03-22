var  random=[1,2,3,4,5,6,7];
for(i=0;i<random.length;i++)
{
	  var sol=	Math.floor(Math.random()*random.length)
	  var rtemp=random[i];
	  random[i]=random[sol];
	  random[sol]=rtemp;
}
console.log(random);