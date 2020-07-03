# 2 ways of managing layout in a design system

A design system is a way to create and manage a cohesive design. Each component in a design system is meticulously created, tested and adjusted to fit the brand and the platform’s need. But what about the glue that sticks all these components together, the layout? How should you manage this? And what happens if you don’t!?

## What happens if you don’t manage your layout

Let’s start with the latest question, **"What happens if you don’t manage your layout"**. In the first weeks of development, you won't notice anything, it’s when you start making changes further into the project, that you discover the mistake(problem). If you have no system to make sure the components on the page are evenly distributed, you will end up with a messy design because changing and updating elements has become tough. For instance; you want to change the distance between each section on the page, but find yourself updating the same value in multiple files. Eventually, you will end up with an unmanageable project where updates take way to much time.

If you achieve to create and maintain a consistent layout, you will end up with a design where the visual hierarchy is clear and where changes to the layout are simple and quick.

### What is "layout"?

So, how should you do this? To be able to answer this question I first want to explain the concept of "layout" to you.
A layout exists out of three main elements. Constrains, spacing and flow.

### Constrains

Constrains are the maximum sizes, either horizontally and vertically. You can think of the maximum width of a text or the max width of a section inside of a colored block on the homepage. Theses values will make sure your design won’t stretch too far on larger screens and fluidly wrap if there is space that allows it.

### Spacing

Spacing is the space between each element in the layout. They make clear what content belongs together and whatnot. They also create white-space and calmness into your design.

### Flow

Flow controls how elements wrap. This is only relevant in a fluent design where elements have the opportunity to wrap. Therefore the flow relies on the constraints of each element.

### The difference between layout and a grid

A grid is always a layout but a layout isn’t always a grid. This is important to understand the solution in the next chapter. A grid always contains the three elements of layout (constrains, spacing and flow). But when a layout doesn’t contain any flow, it’s not a grid and you can create the layout differently.

## How to manage your layout

There are two ways I manage my layouts. Both implementations are very different but can be used in the same project. They are both used in different scenarios.

### Make all values reusable

If you want to start with your layout, you should first set all the different values that you need as variables. Theses values will probably match the three elements of the layout. This is how I do it.

### Constrains

I want to have different constraints for different types of elements. One for large elements like articles, carousels, etc. One for elements like text, images and one for small elements like cards. I use t-shirt size values like s, xl, m, etc for this because it’s easy to add them and clear when you have too many of them.

```CSS
:root {
	—constrain-l: 50rem;
	—constrain-m: 27rem;
	—constrain-s: 10rem;
}
```

Next to these t-shirt size values I also set a value for the text constrain that takes a t-shirt size constrain as its value.

```CSS
:root {
	—max-text: var(—constrain-m);
}
```

### Spacings

The same system is used to create the spacings, only I start with more than three values. Often there is a certain scale in for these values (like you would have with typography). It's important to discuss these values with your design team before setting them. Because changing them after a while will affect a lot of the designs.

```CSS
:root {
	—spacing-xl: 12.5rem;
	—spacing-xl: 9rem;
	—spacing-l: 5.5rem;
	—spacing-m: 2.3rem;
	—spacing-s: 1.125rem;
	—spacing-xs: .3rem;
	—spacing-xxs: .1rem;
}
```

These values rule your design. Therefore, I only use one of these values to declare the spacing between elements. Only if the design team has a very good explanation for them I will create a different value as exception.

### Flow

The flow is something I don’t set in variables as that’s already done by CSS itself. There is no need to create a class for justifying items.

## Manage your layout by CSS classes

For a simple layout (like blocks stacked on each other) I use CSS classes to control it. You can see them as utility classes. To control the spacing, I create three variables that reflect the correct spacing. Each value is assigned to the correct class that indicates the type of element. The names are `.page-element`, `.section-element` and `.text-element`. For the constrains I do the same. `.page-constrain`, `.section-constrain` and `.text-constrain`.

### The advantages

By setting the spaces and constrains with classes, you only have to update one value to affect the layout of the entire website. Because they are set as CSS classes, you can manage the layout entirely from your HTML. No need for components to have any constrains. You can wrap anything in a `div` that contains a layout class and the component will fit nicely into
the layout.

A small example of a template that handles the layout with CSS classes.

```HTML
<main class=“page-constrain”>
	<section class”page-element”>
		<h1>Main title</h1>
		<p>Some nice text</p>
	</section>

	<section class”page-element”>
		<h2>Section title</h2>
		<p>Some nice text</p>

		<div class”section-constrain section-element”>
			// Some component
		</div>
		<div class”section-constrain section-element”>
			// Some component
		</div>
		<div class”section-constrain section-element”>
			// Some component
		</div>
	</section>
</main>
```

This way you have a nice separation between the components and the layout. Where the components don't have to concern where they are placed on the page. They just have to stretch to the outsides of the box.

### The disadvantage

If a layout needs some more configuration or contains the flow aspect, there are better-suited solutions. That's because it's error-prone to add configuration (CCS class or data-element) to each direct child in the layout. It's easy to forget one direct child and break your layout.

## Manege your layout with components

If a layout needs a lot of configuration, managing it by components it the way to go. Also if your layout contains Flow (grids), I use components to control the layout. Just a personal preference, because it's clear in your design system you are talking about a grid, not just the basic layout.

If there are not too many of these components, I usually call them grid-alpha, grid-beta, etc. If there are too many it’s a good idea to align the naming of the grids with the design team for consistency.

### The implementation

A layout component will receive multiple items that need to be rendered inside the grid. They are called grid items. The grid will perform a simple loop and render each component.

```HTML
<div class=“grid-alpha”>
	{for each grid item}
		<div class=“grid-alpha__item”>
			// Render the component
		</div>
	{end for each grid item}
</div>
```

You can use the same variables that are already set for the spacings between each grid item.

### The advantages

The big advantage of using a component instead of classes is the way you can control the exceptions or setting. For instance, you have a very basic grid layout, but the size of the gutters can differ. This could be set by a property of the component. A lot of the times, there are multiple exceptions. Therefore you don’t want to add a class for each exception.

Because grids have control over each element in the grid, it’s able to manage the flow of the grid items. This is not possible with the CSS classes approach because that’s not in control over all the items within it.

The way that grids have the same code interface is also a benefit. Each grid will loop. Therefore it’s very easy to swap grids, without changing anything else. Just change the name grid-alpha to grid-beta and another interface will appear.

## Conclusion

It’s only when you start making changes that you discovered that your layout isn’t managed properly. Instead of applying a fix on a single place, you have to update multiple files. This is where you could have managed your layout in a better manner.

These are two good approaches that can be used beside each other. Managing your layout with CSS classes and with components. CSS classes should be used for layouts without any flow. The different CSS classes manage the distance between the elements (spacing) and the maximum size (constrains). These classes can be used anywhere you want.

If there is a flow aspect to the layout, it’s a better idea to use a component. A component can also receive settings and is very easy to swap with another grid because the code interface is the same.
