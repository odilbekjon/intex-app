const category  = require('./category')
const model = require('./model')

test('categories get method', async () => {
    const GET = await category.GET();
    expect(GET).toBe(await model.categories())
});
