cat scenarist-script.js | tee scenarist.js scenarist.mjs > /dev/null

echo '' >> scenarist.js
echo 'module .exports = Scenarist;' >> scenarist.js

echo '' >> scenarist.mjs
echo 'export default Scenarist;' >> scenarist.mjs
