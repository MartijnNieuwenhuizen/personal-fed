# The Layout in a design system

A design system is a collection of components. Each component solves a different problem and they all have a list of rules on when and how they should be used. It also doesn't matter for a component where it's placed.

To create this flexibility, two rules apply. By sticking to these rules, components are reusable, standalone blocks that can be reused everywhere.

## The rules

* A component should be as wide and high as the container it's in and don't set any constraints for itself
* A component should never have an influence to the layout it’s in

<div class="article__main-item">
  {%- component 'layout-article/be-as-wide-as-you-can' -%}
  <small>Be as wide as you can</small>
</div>

But what will define these constraints?

## Setting constraints

A layout can be seen as setting boundaries. If you are using a grid, a boundary can be that the first item is 4 columns wide. A bit more web based approach is to set a max-width.

After theses boundaries comes distance. What is the distance between each element in the layout. This can be set with margins or the new grid-gap.

Next to that, there is also the flow. When using flexbox you can decide to align all your items left, centered etc.

These three factors produce **the layout**.

[SHOW WHAT IS THE LAYOUT WITH AN IMAGE TO MAKE THE DEFINITION OF LAYOUT IN THE PIECE A BIT MORE CLEAR]

## The technical implementations

There are two good technical implementations to implement layout within this system. The first one is a **class based** approach and the second one is a **component based** approach. You don’t have to choose one for your project. They can be used side by side. The idea is to pick right solution for each individual layout problem that you are having.

### The Class based approache

Do you know Bootstrap? Bootstrap contain a grid that’s often used. By declaring a container, a component recieved a horizontal boundary. Then classes are used to create rows and space components inside that 12 columns grid. This is **not** that system.

### Solving boundary problem

We do use the container class but call it `.constraint`, and we will have multiple of these constraints. If you are used to BEM you could approach it like: `.constraint—s`, `.constraint—m`, `.constraint—l` and `.constraint—xl`. Each constraint sets a max-width and with that solves the boundary part of the layout problem.

### Solving the distance problem

Classes can also be used to difine the space between components. We choose to only influence the vertical spacing between components. This ... the [vision] of building blocks that can be stacked.

By creating classes like `.page-item`, `.section-item` and `.text-item` there are only three spacings possible in your design system. This will help you to create a nice vertical rhythem.

### Solving the flow problem

With the vision of blocks that can be stacked vertically, a class for the flow problem isn’t needed. We don’t have any use-cases for it right now. But if you do, it’s not very complicated to create some classes for this. Just keep in mind that these classes should help you to improve the consistency of your layout.

This solution is really nice if your layout is a vertical stack of blocks.

Make sure these classes are globally scoped and usable on each level of your system. So not only on page level, they can be used inside components as well!

### Component based approach

Instead of adding classed to components or wrapper divs, there is also the option to create a layout as a component and poor the components into this layout-component. A good example is .... [Show the grid of Lanxess].

The layout in the example is content agnostic. This means it can be used on all the levels of your system just like the class based approach. And it can handle each component it’s provided.

### Solving the boundary, distance and flow problem

By using CSS-grid or Flexbox you can solve all the problems at one go! The `max-width` of `grid-template-columns` can be used to declare the with of the components. You can use `grid-gap` or `margin` to set the distance between the components and `justify-content` or `align-items` to control the flow.

We call these components **grids** and we have multiple versions of these grids. We use them to layout a page, section or component.

This solution should be picked if a layout is used multiple times or if the flow problem of the layout is really important.

## Conclusion

A design system is a collection of components. Each component is agnostic to the place they are used. Therefore you need a layout system to show them correctly

Creating a layout has three problems

1. The boundary of a component
2. The distance between each component
3. The flow of the layout

These problems can be solved with two approaches, the class based approach and the component based approach. Theses approaches can both be used in the same application but choose you solution based on the problem.

The class based approach can be very nice for a vertical block based layout. If your layout is reused a lot and the flow part is more important, the component based solution is a better solution.
