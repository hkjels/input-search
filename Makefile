

build: components *.js *.css
	component build --use component-autoprefixer

components: component.json
	component install

test:
	open example.html

clean:
	rm -rf components build


PHONY: build components test clean

