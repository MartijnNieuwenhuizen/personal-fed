A component is therefor very flexible. To create this flexibility, two rules apply. By sticking to these rules, components are reusable, standalone blocks that can be reused everywhere.

## The rules

### Rule 1: Be as wide and high as you can

A component should be as wide and high as the container it's in and don't set any constraints for itself.

<div class="article__main-item">
  {%- component 'layout-article/be-as-wide-as-you-can' -%}
  <small>Be as wide as you can</small>
</div>

### Rule 2: Don't influence the layout

A component should never influence the layout it’s in. The placing of components if the job of the layout and by influencing, you will break the styling.

<div class="article__main-item">
  {%- component 'layout-article/dont-influence-the-layout' -%}
  <small>Don't influence the layout</small>
</div>

But what will define these rules?

## What is **the layout**

There are three subject that are needed to create the layout.

* Constrains, in width and sometimes height
* Distance between the elements
* The flow of the layout

### Constraints

A layout can be seen as a set of horizontal and vertical constraints.

<div class="article__main-item">
  {%- component 'layout-article/constraints-of-a-layout' -%}
  <small>Constraints of a layout</small>
</div>

If you are using a gird, a boundary can be that there is an area of 4 columns and an area of 8 columns. A more of a web-based approach is to set a max-width on each area. This will result in a more fluid layout.

<div class="article__main-item">
  {%- component 'layout-article/more-fluid-layout' -%}
  <small>A more fluid layout. The components should behave the same as the text in this example.</small>
</div>

### Distance between elements

After setting the constraints, there is the distance between each element in the layout. This can be set with `grid-gap` if you use CSS-Grid or with `margins`.

<div class="article__main-item">
  {%- component 'layout-article/distance-between-elements' -%}
  <small>The distance between elements.</small>
</div>

### Flow

Then there is the flow in the layout. When using flexbox you can decide to align all your items left, center or right.

<div class="article__main-item">
  {%- component 'layout-article/flow-in-layout' -%}
  <small>The flow in the layout.</small>
</div>

These three factors; constraints, distance and flow produce **the layout**

## The technical implementations

There are two implementations to choose from when creating a layout. The **class based** approach or the **component based** approach. You don’t have to choose only one for your project. They can be used side by side. The idea is to pick the right solution for each individual layout problem that you are having.

### The Class based approach

Do you know Twitter Bootstrap? Bootstrap contains a grid system that is often used by developers. Its grid works with setting a `container` class to an element. By doing that, the element received a horizontal constraint. The child elements of this container are given `row` classes. This will give those elements a spacing (with `margin`). Then there are `col-...` classes used to set each element into columns.

This approach also uses utility classes like Bootstrap does, but doesn't think in columns and rows. It focuses more on being a fluid layout with a vertical rhythm. Here's how to implement it.

#### Setting the constraints

Constrains determine the horizontal maximum with of an element. A constraint can be set by using the `constraint` class. If there are multiple constrains needed you can use a notation like BEM and create `constraint--s`, `constraint--m`, `constraint--l` and `constraint--xl`. The CSS defines a `max-width` and maybe sets the horizontal `margins` to `auto` but that differs to each design.

#### Setting the distance

To create a nice vertical rhythm you need to evenly space the elements on the page. Because components can be reused everywhere, they should not contain any margins that influence the layout. Otherwise the rhythm is disturbed. These matings are called "Unwanted margins".

You can see the vertical rhythm as building blocks with different vertical spaces. By creating classes like `.page-item`, `.section-item` and `.text-item` there are only three spacings possible. Theses classes will contain CSS that sets the vertical margin to different sizes.

The `page-item` is used to create a vertical distance between each big section on the page.

The `content item` is used to create a vertical distance between each item within such a big section.

The `text-item` is used create a vertical distance between each text. Think of an article with multiple paragraphs.

Depending on your design you should also add horizontal margins in here. The same philosophy will apply.
