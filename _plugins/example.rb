require 'rouge'

module Jekyll
	class ExampleBlock < Liquid::Block

		def initialize(tag_name, markup, tokens)
			super
			@attributes = {}
			markup.scan(Liquid::TagAttributes) do |key, value|
				@attributes[key] = value
			end
		end

		def render(context)

			@formatter = Rouge::Formatters::HTML.new
			@html = super.lstrip.gsub(/&nbsp;/, "")

			@type = @attributes['type'] || "html"
			@type = @type.to_s.downcase

			@lexer = Rouge::Lexer.find_fancy(@type, @html) || Rouge::Lexers::PlainText
			@formatted = @formatter.format(@lexer.lex(@html))

			@hasDemo = @type == "html"
			if context.has_key? @attributes['demo'] and @hasDemo
				@hasDemo = @attributes['demo'].to_s == "true"
			end

			@demo = ""
			if @hasDemo
				@demo = "<div class=\"example-demo\">#{super}</div>"
			end

			@hasTitle = @type != "shell"
			@titleText = "Example (#{@type})"
			if context.has_key? @attributes['title']
				@hasTitle = true
				@titleText = @attributes['title'].gsub(/"/, "")
			end

			@title = ""
			if @hasTitle
				@title = "<div class=\"example-title\">#{@titleText}</div>"
			end

			"<div class=\"example\">#{@title}<div class=\"example-code\">#{@formatted}</div>#{@demo}</div>"
		end
	end
end

Liquid::Template.register_tag('example', Jekyll::ExampleBlock)
