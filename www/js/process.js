let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content = <div>
			<audio id="audio_bomb">
				<source src="audio/Bomb.mp3" type="audio/mp3" />
			</audio>
			<ul><center>
				<li><a href='#' onClick={process.page1}>Chicken Parmesan</a></li>
				<li><a href='#' onClick={process.page2}>Panzanella</a></li>
				<li><a href='#' onClick={process.page3}>Pesto-Stuffed Chicken Breast</a></li>
				<li><a href='#' onClick={process.page4}>Bruschetta-Topped Pasta Meatballs</a></li>
				<li><a href='#' onClick={process.page5}>Italian Pasta Beef and Bake</a></li>
				<li><a href='#' onClick={process.page6}>Easy Beef Burrito Skillet</a></li>
				<li><a href='#' onClick={process.page7}>Garlic Cheddar Chicken</a></li>
				<li><a href='#' onClick={process.page8}>Olive, pepperoni and basil pizza</a></li>
				<li><a href='#' onClick={process.page9}>Mushroom Risotto</a></li>
				<li><a href='#' onClick={process.page10}>Pasta Carbonara</a></li>
				<li><a href='#' onClick={process.page11}>Hamburger Stroganoff Casserole</a></li>
				<li><a href='#' onClick={process.page12}>Crispy roast pork shoulder (porchetta)</a></li>
				<li><a href='#' onClick={process.page13}>Cannoli</a></li>
				<li><a href='#' onClick={process.page14}>Panna Cotta Raspberry Coulis</a></li>
				<li><a href='#' onClick={process.page15}>Pasta Con Pomodoro E Basilico</a></li>
				
				
				
				</center>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				
				<p class="buttons-row" width="30px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align='center' >Panzanella</h1>
				<div align='center'>
						<img src='img/Panzanella.jpg' height='100' width='200' /></div>

				<p >
				<h4><div>INGREDIENTS</div></h4>
					<div>1 kg large fresh juicy tomatoes</div>
					<div>1 medium cucumber</div>
					<div>100 gm small mild olives</div>
					<div>1 medium onion, sliced</div>
					<div>100 gm sun dried tomatoes and their oil</div> 
					<div>1 handful oregano, chopped</div>
					<div>1 handful parsley, chopped</div>
					<div>2 cloves garlic, finely chopped</div>

					<h4><div>DIRECTIONS</div></h4>
						<div>Chop the tomatoes and cucumber roughly into 1 cm cubes, and place in a large bowl. Stir in all the remaining ingredients except the bread, and taste for seasoning. Add some lemon juice if you want a more tart salad. Put the salad in the fridge and leave, covered, overnight until you are ready to eat. The flavor will melt into something magical.Immediately before serving, tear the bread into small pieces and stir into the salad. Words from the chef Sometimes I toast the bread lightly and also add some red and yellow bell peppers. The key to this salad is that the tomatoes have to be juicy. If they aren't, just add a few spoons of tomato juice to the salad.</div>

					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page1:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align='center' >Chicken Parmesan</h1>
				<div align='center'>
						<img src='img/chicken parmesan.jpg' height='100' width='200' /></div>

				<p >
				<h4><div>INGREDIENTS</div></h4>
					<div>4 boneless skinless chicken breast halves</div>
					<div>salt and pepper </div>
					<div>1⁄2 cup Italian breadcrumbs </div>
					<div>1 egg, beaten </div>
					<div>4 tablespoons butter</div> 
					<div>2 cups spaghetti sauce </div>
					<div>4 slices mozzarella cheese</div>
					<div>1 tablespoon grated parmesan cheese </div>

					<h4><div>DIRECTIONS</div></h4>
						<div>Pound chicken to flatten.Salt and pepper to taste.Dip chicken in egg; then in bread crumbs. Fry in butter in hot skillet, turning and browning for 10 minutes or until chicken is done.Remove from skillet.To skillet add spaghetti sauce. Heat thoroughly.Add chicken.Place slices of mozzarella on top of chicken, Sprinkle with parmesan. Cover and cook until cheese is melted.Serve with a side of spaghetti.</div>
							
					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	
page3:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align='center' >Pesto-Stuffed Chicken Breast</h1>
				<div align='center'>
						<img src='img/Pesto-Stuffed Chicken Breast.jpg' height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					<div>1/2 cup basil pesto</div>
					<div>1/2 cup shredded Parmesan cheese (2 oz) </div>
					<div>4 boneless skinless chicken breasts (6 to 8 oz each)</div>
					<div>1 can (14.5 oz) Muir Glen™ organic fire roasted diced tomatoes</div>
					<div>1 tablespoon balsamic vinegar</div> 
					<div>2 cups spaghetti sauce </div>
					<div>4 slices mozzarella cheese</div>
					<div>4 oz fresh mozzarella cheese, cut into 4 slices</div>

					<h4><br/><div>DIRECTIONS</div></h4>
						<div>Tanga magsearch ka sa internet</div> 
					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page4:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align='center' >Bruschetta-Topped Pasta Meatballs</h1>
				<div align='center'>
						<img src="Bruschetta-Topped Pasta and Meatballs.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					<div>1/2 cup basil pesto</div>
					<div>1/2 cup shredded Parmesan cheese (2 oz) </div>
					<div>4 boneless skinless chicken breasts (6 to 8 oz each)</div>
					<div>1 can (14.5 oz) Muir Glen™ organic fire roasted diced tomatoes</div>
					<div>1 tablespoon balsamic vinegar</div> 
					<div>2 cups spaghetti sauce </div>
					<div>4 slices mozzarella cheese</div>
					<div>4 oz fresh mozzarella cheese, cut into 4 slices</div>

					<h4><div>DIRECTIONS</div></h4>
						<div>Tanga magsearch ka sa internet</div> 
					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


page5:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Italian Pasta and Beef Bake</h1>
				<div align="center">
						<img src="img/Italian Pasta and Beef Bake.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					<div>6 oz. (1 1/2 cups) uncooked mostaccioli or penne (tube-shaped pasta)</div>
					<div>1/2 lb. lean (at least 80%) ground beef </div>
					<div>1 (15-oz.) can Italian-style tomato sauce</div>
					<div>1 (14.5-oz.) can diced tomatoes with basil, garlic and oregano, undrained</div>
					<div>1 (4.5-oz.) jar sliced mushrooms, drained</div> 
					<div>2 oz. (1/2 cup) shredded mozzarella cheese </div>
					

					<h4><br/><div>DIRECTIONS</div></h4>
						<div>Heat oven to 350°F. Spray 8-inch square (2-quart) glass baking dish with nonstick cooking spray. Cook mostaccioli as directed on package. Drain.
Meanwhile, in 12-inch nonstick skillet, brown ground beef over medium-high heat until thoroughly cooked, stirring frequently. Drain. Stir in tomato sauce, tomatoes and mushrooms. Bring to a boil. Remove from heat; pour into sprayed baking dish.
Add cooked mostaccioli; stir gently to mix. Spray sheet of foil with cooking spray; place sprayed side down on baking dish and seal tightly.
Bake at 350°F. for 15 minutes. Uncover; sprinkle with cheese. Bake uncovered an additional 5 to 10 minutes or until casserole is bubbly and cheese is melted.
</div>

					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	page6:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Easy Beef Burrito Skillet</h1>
				<div align="center">
						<img src="img/Easy Beef Burrito Skillet.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					<div>1 lb ground beef</div>
					<div>1 (1 oz) package Old El Paso™ taco seasoning mix</div>
					<div>1 cup chunky salsa</div>
					<div>1 (15 oz) can black beans, rinsed and drained</div>
					<div>4 (6 inch) Old El Paso™ flour tortillas, sliced into 1-inch strips</div> 
					<div>1 cup shredded Mexican blend cheese</div>
					<div>1/2 cup sour cream</div>
					<div>1/4 cup sliced green onions</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>In a large skillet, brown beef until no longer pink. Drain. Add taco seasoning, water, salsa and beans. Cook over medium heat for 3-5 minutes or until the sauce thickens. Reduce heat to low.Stir in the tortilla strips and then top with cheese. Remove skillet from heat and let cheese melt. Top with sour cream and sprinkle with green onions. Serve immediately.</div>



					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	page7:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Garlic Cheddar Chicken</h1>
				<div align="center">
						<img src="img/Garlic Cheddar Chicken.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>1 kg large fresh juicy tomatoes</div>
					<div>1 medium cucumber</div>
					<div>100 gm small mild olives</div>
					<div>1 medium onion, sliced</div>
					<div>100 gm sun dried tomatoes and their oil</div> 
					<div>1 loaf Italian cibatta or French baguette, torn into pieces</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>Preheat oven to 350 degrees F (175 degrees C). Melt the butter in a saucepan over low heat, and cook the garlic until tender, about 5 minutes. In a shallow bowl, mix the bread crumbs, Parmesan cheese, Cheddar cheese, parsley, oregano, pepper, and salt. Dip each chicken breast in the garlic butter to coat, then press into the bread crumb mixture. Arrange the coated chicken breasts in a 9x13 inch baking dish. Drizzle with any remaining butter and top with any remaining bread crumb mixture.
</div>

					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	page8:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Olive, pepperoni and basil pizza</h1>
				<div align="center">
						<img src="img/Olive, pepperoni and basil pizza.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>1 kg large fresh juicy tomatoes</div>
					<div>1 medium cucumber</div>
					<div>100 gm small mild olives</div>
					<div>1 medium onion, sliced</div>
					<div>100 gm sun dried tomatoes and their oil</div> 
					<div>1 loaf Italian cibatta or French baguette, torn into pieces</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>Preheat oven to 130C. Place pork on a clean work surface. Use a sharp knife to score the rind in 1cm intervals. Place caraway and half the fennel seeds in a small frying pan over low heat. Cook, tossing, for 1 minute until aromatic.Increase heat to 240C. Pour the combined wine and stock around the pork
</div>

					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	page9:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Mushroom Risotto</h1>
				<div align="center">
						<img src="img/mushroom risotto.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>1 tablespoon olive oil</div>
					<div>25 gm butter</div>
					<div>200 gm sliced mushrooms</div>
					<div>1/4 cup white wine (optional)</div>
					<div>4 cups hot chicken stock/veg stock</div> 
					<div>1/3 cup parmesan cheese grated</div>
					<div>1 tablespoon parsley</div>
					<div>25 grams extra butter just before serving</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>Saute onion and mushrooms in oil and butter until soft Stir in rice and cook till transparent, add wine if it gets dry. Stir in 1 ladle of stock. Stir well, cover and simmer gently for several minutes or till rice looks dry. Add more stock, stir,cover and keep repeating this process till rice is just cooked (about 25 minutes). Taste and add a little salt. Now remove from heat and stir in parmesan, parsley, extra butter if using and pepper to taste.</div>

					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


page10:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Pasta Carbonara</h1>
				<div align="center">
						<img src="img/Pasta Carbonara.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>1 packet spaghetti</div>
					<div>100 g bacon, cut in strips</div>
					<div>3 eggs, Salt to taste</div>
					<div>1 egg yolk, 1 Tbsp olive oil</div>
					<div>100 g Pecorino Romano or Parmesan - grated</div> 
					<div>Lots of black pepper - coarsely crushed</div>
					
					

					<h4><div>DIRECTIONS</div></h4>
						<div>In a large pan or a saucepan, heat the olive oil and fry the bacon till crisp. Set aside. In a mixing bowl, beat the whole eggs and the yollk well. Stir in the grated cheese and set aside. Boil the spaghetti in abundant salty water. Drain the pasta, reserving some of the cooking water. In another saucepan, toss the pasta with the egg mixture, bacon and any fat rendered from cooking the bacon, over very low heat. Make sure that the individual strands of pasta are all coated properly with the mixture. Season with salt, add the pasta water, give it a quick toss, and remove right away from the heat. The sauce should have a creamy texture, which will be lost if the pasta remians on the fire for too long. The idea is to cook the egg with the heat of the pasta, and not with the heat of the fire. Serve right away with lots of pepper, freshly crushed in a pepper mill, and more Parmesan if desired.</div>
					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	page11:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Hamburger Stroganoff Casserole</h1>
				<div align="center">
						<img src="img/Hamburger Stroganoff Casserole.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>8 oz. (4 cups) uncooked medium egg noodles</div>
					<div>1 lb. lean ground beef</div>
					<div>12 oz. small fresh whole mushrooms, halved (3 1/2 cups)</div>
					<div>2 garlic cloves, minced</div>
					<div>2(1.0 to 1.3-oz.) pkg. beef or pork gravy mix</div> 
					<div>1/4 teaspoon pepper</div>
					<div>2 1/2 cups water</div>
					<div>1 (8 oz.) container sour cream</div>
					<div>1/2 teaspoon nutmeg</div>
					<div>1/4 cup chopped fresh parsley</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>In a large pan or a saucepan, heat the olive oil and fry the bacon till crisp. Set aside. In a mixing bowl, beat the whole eggs and the yollk well. Stir in the grated cheese and set aside. Boil the spaghetti in abundant salty water. Drain the pasta, reserving some of the cooking water. In another saucepan, toss the pasta with the egg mixture, bacon and any fat rendered from cooking the bacon, over very low heat. Make sure that the individual strands of pasta are all coated properly with the mixture. Season with salt, add the pasta water, give it a quick toss, and remove right away from the heat. The sauce should have a creamy texture, which will be lost if the pasta remians on the fire for too long. The idea is to cook the egg with the heat of the pasta, and not with the heat of the fire. Serve right away with lots of pepper, freshly crushed in a pepper mill, and more Parmesan if desired.</div>
					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Crispy roast pork shoulder (porchetta)</h1>
				<div align="center">
						<img src="img/Crispy roast pork shoulder (porchetta).jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>2.5kg pork shoulder, skin on</div>
					<div>1 teaspoon caraway seeds</div>
					<div>1 tablespoon fennel seeds</div>
					<div>1/2 cup coarsely chopped oregano</div>
					<div>1/4 cup coarsely chopped flat-leaf parsley</div>
					<div>2 tablespoons coarsely chopped rosemary</div>
					<div>1 tablespoon olive oil</div>
					<div>2 tablespoons sea salt flakes</div>
					<div>1/2 cup (125ml) dry white wine</div>
					<div>1/2 cup (125ml) Massel chicken style liquid stock</div>

					<h4><div>DIRECTIONS</div></h4>
						<div>Preheat oven to 130C. Place pork on a clean work surface. Use a sharp knife to score the rind in 1cm intervals. Place caraway and half the fennel seeds in a small frying pan over low heat. Cook, tossing, for 1 minute until aromatic. Increase heat to 240C. Pour the combined wine and stock around the pork
</div>					</p>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	page13:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Cannoli</h1>
				<div align="center">
						<img src="img/Cannoli.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>150 plain flour</div>
					<div>1 tbsp golden caster sugar</div>
					<div>large pinch bicarbonate of soda</div>
					<div>½ tsp cinnamon</div>
					<div>1 tsp cocoa powder (optional)</div>
					<div>30g butter</div>
					<div>50ml dry marsala or white wine rapeseed oil</div>
					<div>50g dark chocolate, melted</div>
					<div>handful pistachio kernels, finely chopped</div>
					<div>cannoli moulds</div>

					<h4><div>DIRECTIONS</div></h4>
						<div>Tip the flour, sugar, bicarb, cinnamon and cocoa (if using) into a bowl with a pinch of salt. Fill a deep-fat fryer, wok or deep saucepan a third of the way up with oil. Deep-fry the cannoli (with their moulds) one at a time, making sure they cook all over. Serve soon after filling.
</div>					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	page14:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Panna Cotta Raspberry Coulis</h1>
				<div align="center">
						<img src="img/Panna Cotta Raspberry Coulis.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>4 sheets of gelatine</div>
					<div>2-3 Tbsp water, 1 vanilla pod</div>
					<div>250 ml milk, 60 ml gin</div>
					<div>300 ml cream</div>
					<div>4 Tbsp of sugar</div>
					<div>200 gms frozen raspberries</div>
					<div>Juice of 1 lemon</div>
					
					

					<h4><div>DIRECTIONS</div></h4>
						<div>Soak the sheets of gelatin in cold water. Add cream, milk and 2 tablespoons of sugar and vanilla pod. Bring to a simmer while stirring continuously. Squeeze the water out of the gelatin and mix with the milk and cream mixture. Stir gently till gelatin has completely dissolved. Strain the mixture into another bowl. Set aside to cool. Divide the mix equally into oiled ramekins. Put in the fridge to set for 3 hours. Add 100gms of frozen raspberries, lemon juice, gin and 2 tablespoons of sugar in a saucepan. Mix and bring to a boil. Blend the mixture into a puree and allow to cool. To Serve: Garnish with whole raspberries and raspberry coulis.</div>					</p>
				

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	page15:function(){
		let content = <div>
				
				<p class="buttons-row" width="100px" height="100px">
				<a href='#'  class="button button-fill color-yellow"  onClick={process.menu}>BEST ITALIAN RECIPES</a>
				</p>
				<h1 align="center" >Pasta Con Pomodoro E Basilico</h1>
				<div align="center">
						<img src="img/Pasta Con Pomodoro E Basilico.jpg" height='100' width='200' /></div>

				<p>
				<h4><div>INGREDIENTS</div></h4>
					
					<div>1 kg large red ripe tomatoes</div>
					<div>40 ml extra virgin olive oil</div>
					<div>3 cloves garlic, peeled and minced</div>
					<div>A handful of fresh basil</div>
					<div>A pinch of red chilly flakes</div>
					<div>1 packet Penne (though you could use any pasta here, long, thin, short or tube, as this is a sauce which works well with all the pastas)</div>
					<div>200 gms frozen raspberries</div>
					<div>Parmesan cheese</div>
					<div>Salt to taste</div>
					

					<h4><div>DIRECTIONS</div></h4>
						<div>Cut the tomatoes in half crosswise and remove most of the seeds, using your fingers. Then quarter the tomatoes. Heat the oil in a large skillet, and add garlic and chilly flakes. As soon as the garlic gives off its aroma and becomes opaque, add the tomatoes. Cook over high heat until the tomato begins to thicken. Use a wooden spoon to stir and help break the tomato pulp. Add the basil, either whole or roughly chopped, and salt. When the sauce is cooked, remove it from the heat and run it through a food processor for a minute. Cook the pasta in abundant boiling water, till al dente, and drain. Place in a serving bowl with the sauce. Drizzle a little olive oil over the pasta and mix well with the sauce. Serve with grated Parmesan cheese.</div>
</p>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	





	

	



	
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					<audio id="audio">
						<source src="audio/" type="audio/ogg" />
					</audio>
					<div align='center'><br /> <br /> <br/> <br/> <br/> <br/> <br/><br /> <br/> <br /> <br/>
						<img src='img/log.jpg' width='150px' /><br /><br />
						<h3>Best Italian Recipes</h3>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},1000);