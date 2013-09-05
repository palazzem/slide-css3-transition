CSS3 translations
=================

This is a simple example on how to use CSS3 translations. The main idea is that sometimes we want to use some animation
in our web apps but the application doesn't respond very well. To increase the smoothness we need so much FPS as our
eyes can see (about 30). With CSS3 translations and some vendor prefix, we can enhance the quality of our animations
using devices GPU (if available). If it is not available, CSS3 is (actually) more performant than Javascript animations.

Requirements
------------

* `jQuery 1.10.2`_ (used only to attach events and add/remove CSS classes)
* `Ruby 1.9`_ (used as web server and only for a quick deploy on `Heroku`_)

.. _jQuery 1.10.2: http://jquery.com/
.. _Ruby 1.9: https://www.ruby-lang.org/en/
.. _Heroku: https://heroku.com

Local demo
----------

Go inside folder and run:

.. code-block:: python

    bundle install

Then run local server with:

.. code-block:: python

    rackup

Try this image slider (all images are chosen randomly)!

Online demo
-----------

You can find online demo `here`_ (deployed on Heroku)

.. _here: http://palazzem.herokuapp.com/

License
-------

* Public domain
