module.exports = theo => {
  theo.registerValueTransform(
    'transformFontFamily', 
    prop => prop.get('type') === 'fontFamily', 
    prop => {
      console.log(prop.get('value').toArray().toString())
      const arr = prop.get('value').toArray().toString();
      return arr;
    }
  );
  theo.registerTransform("web", ['transformFontFamily']);
}