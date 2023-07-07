1. What is the difference between Component and PureComponent? Give
   an example where it might break my app.

When we use `React.Component` the child component is also re-rendered if the parent component re-renders itself, but in the `React. PureComponent`, the child component only re-renders if the props passed to it changes or state changes.

Since `React.PureComponent` implements `shouldComponentUpdate()` with a shallow prop and state comparison, so prop changes will be ignored if it couldn't find difference in shallow comparison. For example the component `Greeting` wouldn't be rerendered if prop changing from user={{data:{name: "John", surname: "Smith"}}} to user={{data:{name: "Ron", surname: "Lavit"}}}

```
class Greeting extends PureComponent {
render() {
 return (
    <div>
    <h1>Hello, {this.props.user.data.name}!</h1>
    <h1>Hello, {this.props.user.data.surname}!</h1>
    </div>
    );
}
}

<Greeting user={{data:{name: "John", surname: "Smith"}}}>
```

2. Context + ShouldComponentUpdate might be dangerous. Why is that?
   `ShouldComponentUpdate` is testing for whether the values of the object are strictly equal. If they’re not, then (and only then) will the component update. But since context is not checked, nothing happens.

3. Describe 3 ways to pass information from a component to its PARENT.

4. Give 2 ways to prevent components from re-rendering.
   1 - Memoization with `React.memo` and hooks `React.useMemo()`, `React.useCallback()`
   2 - There are cases where we need to track state changes without re-rendering the components. So we can replace `useState()` with `useRef()`. By this we can track the state changes without causing component re-renderings.

5. What is a fragment and why do we need it? Give an example where it might
   break my app.
   <Fragment>, often used via <>...</> syntax, lets group elements without a wrapper node. By this there is no extra node added to the DOM.
   I can not give an example of break app.
6. Give 3 examples of the HOC pattern.
    I can give only two examples of HOC pattern
   1.Inheritance Inversion
   ```
   function iiHOC(WrappedComponent) {
   return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
   }
   }
   ```
   2.Props Proxy
   ```
   function ppHOC(WrappedComponent) {
   return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
   }
   }
   ```

7. What's the difference in handling exceptions in promises, callbacks
   and async…await?

- promises: promise.catch(e => {...})
- async…await: try {...} catch {...}

8. How many arguments does setState take and why is it async.
   The setState method takes up to 2 arguments.
   The setState takes an optional callback parameter that can be used to make updates after the state is changed.
   Making `setState` synchronous might leave the browser unresponsive
9. List the steps needed to migrate a Class to Function Component.

- Change the class to a function
- Remove the render method
- Convert all methods to functions
- Remove references to `this`
- Remove constructor, `useState` instead of `this.state`
- Remove event handler bindings
- Replace this.setState
- Replace lifecycle methods with hook `useEffect`

10. List a few ways styles can be used with components.

- Inline CSS
- Normal CSS
- CSS in JS
- Styled Components
- CSS module

11. How to render an HTML string coming from the server.
    `dangerouslySetInnerHTML`
    `<div dangerouslySetInnerHTML={"string"}/>`

```

```
