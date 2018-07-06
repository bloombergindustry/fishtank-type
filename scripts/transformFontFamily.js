module.exports = theo => {
  theo.registerValueTransform(
    'transformFontFamily', 
    prop => prop.get('type') === 'fontFamily', 
    prop => {
      const arr = prop.get('value').toArray();
      return arr;
    }
  );
  theo.registerTransform("web", ['transformFontFamily']);
}