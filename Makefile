

build: components *.js *.css
	component build

components: component.json
	component install

test:
	open example.html

clean:
	rm -rf components build


PHONY: build components test clean

