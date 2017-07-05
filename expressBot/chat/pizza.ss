> topic orderPizza

+ conversation
- Hello, How can I help you?

	+ i want to order a *1
	% Hello, How can I help you
	- Sure, Which <cap1> you want, Cheese or Paneer

		+ (cheese|paneer)
		% Sure, Which * you want, Cheese or Paneer
		- Pan pizza or thin crust?

			+ (pan|thin crust)
			% Pan pizza or thin crust *
			- What size do you want? Regular or Medium or Large?

				+ (regular|medium|large)
				% What size do you want? Regular or Medium or Large?
				- Alright, your <p1cap1> <p2cap1> <p3cap1>, <cap> size will be ready in ten minutes. Thank you. 

				+ *
				% What size do you want? Regular or Medium or Large?
				- I am sorry. Lets start again... {@conversation}

			+ *
			% Pan pizza or thin crust *
			- I am sorry, That is not available. Please choose between pan pizza and thin crust pizza
		+ *
		% Sure, Which * you want, Cheese or Paneer
		- I am sorry, That is not available. Please choose between cheese and paneer


< topic