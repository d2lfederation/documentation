module Jekyll
	class ImportantBlock < Liquid::Block

		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end

		def render(context)
			@title = "Important"
			if @markup.length > 0
				@title = "Important: " + @markup
			end
			"<div class=\"important\" markdown=\"1\"><div class=\"note-title\">#{@title}</div>#{super}</div>"
		end
	end
end

Liquid::Template.register_tag('important', Jekyll::ImportantBlock)
