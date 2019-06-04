export default function CreateListComponent(componentName) {
  return {
    name: componentName,
    render() {
      return <div>List {componentName}</div>
    }
  }
}
