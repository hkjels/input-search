

build: components *.js style.css
	component build

components: component.json
	component install

style.css: style.mcss
	myth $^ $@

test: build
	open example.html

clean:
	rm -rf components build


PHONY: test clean

