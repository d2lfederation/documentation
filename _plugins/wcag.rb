module Jekyll
	class WcagBlock < Liquid::Block

		def initialize(tag_name, markup, tokens)
			super
			@attributes = {}
			markup.scan(Liquid::TagAttributes) do |key, value|
				@attributes[key] = value
			end
		end

		def render(context)

			@level = "a"
			if context.key? @attributes['level']
				@level = @attributes['level'].gsub(/"/, "")
			end

			@url = ""
			if context.key? @attributes['url']
				@url = @attributes['url'].gsub(/"/, "")
			end

			"<a class=\"wcag wcag-#{@level}\" href=\"#{@url}\" target=\"_blank\" small><strong>WCAG 2.0 Level #{@level.upcase}</strong><br />#{super}</a>"
		end
	end
end

Liquid::Template.register_tag('wcag', Jekyll::WcagBlock)
