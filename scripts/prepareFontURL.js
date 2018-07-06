module.exports = theo => {
  theo.registerValueTransform(
    'prepareFontURL', 
    prop => prop.get('type') === 'url', 
    prop => {
      const arr = prop.get('value').toArray();
      return arr;
    }
  );
  theo.registerTransform("web", ['prepareFontURL']);
}